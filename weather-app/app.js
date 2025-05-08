const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
    .option('city', {
        describe: 'City name to find weather info about',
        demandOption: true,
        type: 'String'
    })
    .help()
    .argv;



function getWeatherData(city) {
    const weatherData = {
        'new york': {
            temperature: 72,
            conditions: 'Partly Cloudy',
            humidity: 65,
            windSpeed: 8
        },
        'london': {
            temperature: 60,
            conditions: 'Rainy',
            humidity: 35,
            windSpeed: 24
        },
        'tokyo': {
            temperature: 80,
            conditions: 'Sunny',
            humidity: 55,
            windSpeed: 9
        },
        'sydney': {
            temperature: 85,
            conditions: 'Mostly Sunny',
            humidity: 50,
            windSpeed: 15
        },
    }

    return weatherData[city] || 'Data is not available';
}

function styleWeatherData(city, weatherData) {
    console.log(`Today\'s weather in ${city}:`);

    if (weatherData.temperature < 60) {
        console.log(chalk.blue(`It's ${weatherData.temperature} degrees out. Wear a jacket!`));
    } else if (weatherData.temperature > 85) {
        console.log(chalk.red(`It's ${weatherData.temperature} degrees out. Pack a lemonade and your sunscreen.`));
    } else {
        console.log(chalk.green(`It's ${weatherData.temperature} degrees out. Beautiful day...`));
    }

    console.log(chalk.italic.magenta(`The conditions in ${city} will be ${weatherData.conditions}.`));

}

function main() {
    const city = argv.city;
    console.log(chalk.dim(`Fetching weather data for ${city}...`));
    const weatherData = getWeatherData(city);

    styleWeatherData(city, weatherData);

}

main();

