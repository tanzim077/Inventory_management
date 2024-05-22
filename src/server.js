/*
 * File           : server.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 04:14:11
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Tue May 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import app from './app.js';
import config from './config/index.js';

async function bootstrap() {
  const server = app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error) => {
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);
}

bootstrap();
