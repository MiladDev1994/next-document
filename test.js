const fs = require("fs")
// const SftpClient = require('ssh2-sftp-client');
// const sftp = new SftpClient();

// const remotePath = 'ftp://192.168.1.3:2221/FilterTypeForm.txt';

// sftp.connect({
//     host: '192.168.1.3',
//     port: '2221',
//     username: 'admin', // Replace with your username
//     password: 'admin'  // Replace with your password
//     })
//     .then(() => {
//     return sftp.get(remotePath);
//     })
//     .then(data => {
//     console.log(data.toString()); // Assuming the file is text
//     })
//     .catch(err => {
//     console.error(err.message);
//     });


// const path = "ftp://192.168.1.3:2221/FilterTypeForm.txt";
// const path_1 = '\\\\192.168.1.6\\Share\\index.html';
// const pase = '\\\\192.168.1.6\\Share\\index_copy.html';
// const read = fs.readFileSync(path_1, "utf-8")
// fs.copyFileSync(path_1, pase)
// console.log(read)


// const stream = fs.createReadStream(path_1);

// stream.on('data', function(chunk) {
// // Process the chunk of data as it is read
// console.log(`Received ${chunk.length} bytes of data.`);
// });

// stream.on('end', function() {
// console.log('There is no more data to read.');
// });

// stream.on('error', function(err) {
// console.error('An error occurred:', err);
// });






// const ftp = require("basic-ftp");

// async function main() {
//     const client = new ftp.Client();
    
//     try {
//         await client.access({
//             host: "192.168.1.3",
//             port: 2221,
//         //    user: "username", // Enter the username for the FTP server on your phone
//         //    password: "password" // Enter the password for the FTP server on your phone
//         });
        
//         const stream = await client.downloadTo("FilterTypeForm.txt", "FilterTypeForm.txt");
//         console.log("File downloaded successfully!");
//     } catch (err) {
//         console.error("Error downloading file:", err);
//     } finally {
//         client.close();
//     }
// }

// main();





const rdp = require('node-rdpjs');

const client = rdp.createClient({
    domain: '192.168.1.6',
    userName: 'Milad',
    password: '5913',
    enablePerf: true,
    autoLogin: true,
    decompress: false,
    screen: {
        width: 1024,
        height: 768
    },
    locale: 'en',
    logLevel: 'INFO'
})
.on('connect', () => {
    console.log('Connected to the remote system!');
    // You can now start interacting with the remote system
})
.on('close', () => {
    console.log('Connection closed');
})
.on('bitmap', (bitmap) => {
    // Handle screen updates here
})
.on('error', (err) => {
    console.error('Error occurred:', err);
})
.connect('REMOTE_SYSTEM_IP', 3389);