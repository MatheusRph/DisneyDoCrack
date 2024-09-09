const puppeteer = require('puppeteer');

(async () => {
  // Lança o navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navega para a página da web que você deseja capturar dados
  await page.goto(''); // Substitua pelo URL da sua aplicação Java

  // Extraia dados da página
  const dados = await page.evaluate(() => {
    // Suponha que você queira capturar o texto dentro de um elemento com a classe 'resultado'
    return document.querySelector('.red').innerText;
  });

  console.log('Dados Capturados:', dados);

  // Fecha o navegador
  await browser.close();
})();
