import url from 'url';

const portfolio = new URL('https://alanlengkoan.com/belajar?kelas=nodejs&tahun=2022');

console.info(portfolio.toJSON());
console.info(portfolio.toString());
console.info(portfolio.protocol);
console.info(portfolio.host);
console.info(portfolio.pathname);
console.info(portfolio.searchParams);

const params = portfolio.searchParams;
console.info(params.get('kelas'));
console.info(params.get('tahun'));




portfolio.host = "www.test.com";
const paramPortfolio = portfolio.searchParams;
paramPortfolio.set('status', 'premium');
paramPortfolio.append('kategori', 'web');

console.info(portfolio.toString());