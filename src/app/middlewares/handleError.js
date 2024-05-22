/*
 * File           : handleError.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 07:19:47
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

const handleError = (error, res) => {
  const { name } = error;
  return res.status(500).send({
    status: 'failed',
    message: 'Internal server error',
    error: error.message || error.stack || error.toString(),
  });
};
export default handleError;
