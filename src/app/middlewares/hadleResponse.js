/*
 * File           : hadleResponse.js
 * Project        : inventory-management
 * Created Date   : Tu 21 May 2024 06:16:44
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

const handleResponse = ({ res, statusCode, status, message, data }) => {
  return res.status(statusCode).send({
    status,
    message,
    data,
  });
};
export default handleResponse;
