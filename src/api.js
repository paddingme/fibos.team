import request from "./utils/request";

export function getBackups() {
  return request({
    url: `/api/backups`
  });
}
