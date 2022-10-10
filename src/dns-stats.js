const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let domainsAmount = {};
  let allDomains = '';

  for (let domain = 0; domain < domains.length; domain++) {
    let splittedAddress = domains[domain].split('.');

    while (splittedAddress.length) {
      let domainStr = '';

      for (let i = splittedAddress.length - 1; i >= 0; i--) {
        domainStr += '.' + splittedAddress[i];
      }
      allDomains += '/' + domainStr + '/';
      domainsAmount[domainStr] = 0;

      splittedAddress.splice(0, 1);
    }
  }

  console.log(domainsAmount)
  for (let i in domainsAmount) {
    const re = new RegExp('/' + i + '/', 'g');
    const domainsOccurences = allDomains.match(re).length;

    domainsAmount[i] = domainsOccurences;
  }

  return domainsAmount;
}

module.exports = {
  getDNSStats
};
