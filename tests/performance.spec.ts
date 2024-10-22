import { test, expect } from '@playwright/test';
import { exec } from 'child_process';
import * as util from 'util';

const execPromise = util.promisify(exec);

test('Lighthouse Performance Test', async ({ page }) => {
    const url = 'https://int.slot.com';

    // Abre la página en Playwright
    await page.goto(url);

    // Ejecuta Lighthouse como un subproceso
    try {
        const { stdout, stderr } = await execPromise(`lighthouse ${url} --output=json --output-path=./lhreport.json --chrome-flags="--headless"`);

        if (stderr) {
            console.error(`Error executing Lighthouse: ${stderr}`);
            return;
        }

        console.log('Lighthouse report generated!');
        console.log(stdout);

        // Aquí podrías leer y procesar el informe de Lighthouse si es necesario
    } catch (error) {
        console.error(`Error running Lighthouse: ${error}`);
    }
});
