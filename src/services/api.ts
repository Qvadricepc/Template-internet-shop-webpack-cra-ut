export const fetchUpgrade = (url: string, options = {}, { timeout = 60000 } = {}) => {
  const request = global
    .fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        const message = res.statusText || res.status;
        const err = new Error(String(message));
        // @ts-ignore
        err['statusCode'] = res.status;
        return Promise.reject(err);
      }
      return res;
    })
    .then((res) => res.json())
    .catch((e) => {
      const msgStr = e.message;
      const isOffline = msgStr.includes('Network');
      const err = new Error(msgStr);
      if (isOffline) {
        // @ts-ignore
        err['offline'] = true;
      }
      return Promise.reject(err);
    });

  const timer = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout));

  return Promise.race([request, timer]);
};
