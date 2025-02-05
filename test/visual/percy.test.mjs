import percySnapshot from '@percy/puppeteer';
import puppeteer from 'puppeteer';

// Define a test suite using the describe function (mocha)
describe('UDS visual tests', function () {
    this.timeout(60000);
    let page;
    let browser;

    //define port
    const PORT = 3000;

     // Define what to do before test cases are run
    before(async () => {
      console.log(`Before`);
      //start the puppeteer browser and page
      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless:true,
        slowMo:0
      });
      page = await browser.newPage();
    });
    // Define what to do after the test cases are run (mocha)
    after(async function()  {
      console.log(`After`);
      //close browser
      await browser.close();
      //stop the server
    });

    //do percy snapshots page by page
    // Define a test case using the it function (mocha)
    it('components 1', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/components1/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "components 1", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('components 2', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/components2/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "components 2", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('components 3', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/components3/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "components 3", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('patterns', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/patterns_all/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "patterns", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('layouts', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/layouts/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "layouts", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('footers', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/footers/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "footers", { widths: [375, 767, 1280] });
    });
    // Define a test case using the it function (mocha)
    it('headers', async function () {
      //go to test page
      await page.goto(`http://localhost:${PORT}/patterns/headers/`);
      //wait for element to load
      await page.waitForSelector('h1');
      //get snapshot
      await percySnapshot(page, "headers", { widths: [375, 767, 1280] });
    });
  });