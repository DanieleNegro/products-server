export const getPort = () => {
  let port = 8081;
  const portIndex = process.argv.findIndex((item) => item.includes('--port'));
  if (portIndex > -1) {
    const strPort = process.argv[portIndex].replace('--port=', '');
    if (strPort.length > 0 && !isNaN(parseInt(strPort, 10))) {
      port = parseInt(strPort, 10);
    }
  }
  return port;
};

export const getDBKey = () => {
  let dbKey = 'default';
  const dbKeyIndex = process.argv.findIndex((item) => item.includes('--db'));
  if (dbKeyIndex > -1) {
    const key = process.argv[dbKeyIndex].replace('--db=', '');
    if (key.length > 0 && ['first', 'second'].includes(key)) {
      dbKey = key;
    }
  }
  return dbKey;
};
