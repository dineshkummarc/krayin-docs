(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{409:function(a,e,t){"use strict";t.r(e);var s=t(17),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#install-using-gui-installer"}},[a._v("Install Using GUI Installer")])]),e("li",[e("a",{attrs:{href:"#install-using-composer"}},[a._v("Install Using Composer")])]),e("li",[e("a",{attrs:{href:"#start-using-krayin"}},[a._v("Start Using Krayin")]),e("ul",[e("li",[e("a",{attrs:{href:"#on-a-production-server"}},[a._v("On a Production Server")])]),e("li",[e("a",{attrs:{href:"#on-your-local-server"}},[a._v("On Your Local Server")])]),e("li",[e("a",{attrs:{href:"#login-as-an-admin"}},[a._v("Login as an Admin")])])])]),e("li",[e("a",{attrs:{href:"#installing-krayin-on-shared-hosting"}},[a._v("Installing Krayin on Shared Hosting")]),e("ul",[e("li",[e("a",{attrs:{href:"#contributing"}},[a._v("Contributing")])]),e("li",[e("a",{attrs:{href:"#license"}},[a._v("License")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"install-using-gui-installer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-using-gui-installer"}},[a._v("#")]),a._v(" Install Using GUI Installer")]),a._v(" "),e("p",[a._v("To install Krayin using our GUI installer, you can follow any of the following methods:")]),a._v(" "),e("h4",{attrs:{id:"method-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-1"}},[a._v("#")]),a._v(" Method 1:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory.")])]),a._v(" "),e("li",[e("p",[a._v("Once you are in the desired directory, run the following command in your terminal to install Krayin:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project krayin/laravel-crm\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Configure your HTTP server to point to the "),e("strong",[e("code",[a._v("public/")])]),a._v(" directory of the project.")])]),a._v(" "),e("li",[e("p",[a._v("Open your browser and access the following URL:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("http://localhost/krayin/public/\n")])])]),e("p",[a._v("This will launch the Krayin installer.")])])]),a._v(" "),e("h4",{attrs:{id:"method-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-2"}},[a._v("#")]),a._v(" Method 2:")]),a._v(" "),e("p",[a._v("Otherwise you can download the zip file and install it using the following steps:")]),a._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://krayincrm.com/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Download Krayin"),e("OutboundLink")],1),a._v(" from our website.")])]),a._v(" "),e("li",[e("p",[a._v("Extract the contents of the downloaded")])]),a._v(" "),e("li",[e("p",[a._v("Navigate to the project root directory.")])]),a._v(" "),e("li",[e("p",[a._v("Run the following command:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Configure your HTTP server to point to the "),e("strong",[e("code",[a._v("public/")])]),a._v(" directory of the project.")])]),a._v(" "),e("li",[e("p",[a._v("Open your browser and access the following URL:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("http://localhost/krayin/public/\n")])])]),e("p",[a._v("This will launch the Krayin installer.")])])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Ensure that Composer is installed on your system")])]),a._v(" "),e("h2",{attrs:{id:"install-using-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-using-composer"}},[a._v("#")]),a._v(" Install Using Composer")]),a._v(" "),e("p",[a._v("To install Krayin using Composer, use the following steps:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Choose the directory where you want to install Krayin. Open your terminal and navigate to this directory.")])]),a._v(" "),e("li",[e("p",[a._v("Once you are in the desired directory, run the following command in your terminal to install Krayin:")])]),a._v(" "),e("li",[e("p",[a._v("Run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project krayin/laravel-crm\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan krayin-crm:install\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("During the installation process, if the "),e("strong",[e("code",[a._v(".env")])]),a._v(" file doesn't exist, the installer will prompt you to provide the necessary information.")])])]),a._v(" "),e("li",[e("p",[a._v("Follow the prompts during the installation process to provide the following details:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("- Please enter the application name "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please enter the application URL "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the default application locale "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the default currency "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database connection "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database name "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please enter your database username "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n- Please enter your database password "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n")])])])]),a._v(" "),e("li",[e("p",[a._v("For Create your admin credentials")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("- Enter the name of the admin user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n- Enter the email address of the admin user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n- Configure the password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" the admin user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"start-using-krayin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-using-krayin"}},[a._v("#")]),a._v(" Start Using Krayin")]),a._v(" "),e("h3",{attrs:{id:"on-a-production-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-a-production-server"}},[a._v("#")]),a._v(" On a Production Server")]),a._v(" "),e("p",[a._v("To access Krayin on a production server, open your domain in a web browser. For example:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://example.com/\n")])])]),e("h3",{attrs:{id:"on-your-local-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#on-your-local-server"}},[a._v("#")]),a._v(" On Your Local Server")]),a._v(" "),e("p",[a._v("To access Krayin on your local server, follow these steps:")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Configure your HTTP server to point to the "),e("strong",[e("code",[a._v("public/")])]),a._v(" directory of the project.")])]),a._v(" "),e("li",[e("p",[a._v("Run the following command:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan serve\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Open your browser and access the provided local server URL.")])])]),a._v(" "),e("h3",{attrs:{id:"login-as-an-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-as-an-admin"}},[a._v("#")]),a._v(" Login as an Admin")]),a._v(" "),e("p",[a._v("To log in as an admin, visit "),e("strong",[e("code",[a._v("https://example.com/admin/")])]),a._v(". If you used the "),e("strong",[e("code",[a._v("php artisan krayin-crm:install")])]),a._v(" command, use the following credentials:")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Email: admin@example.com\nPassword: admin123\n")])])]),e("h2",{attrs:{id:"installing-krayin-on-shared-hosting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-krayin-on-shared-hosting"}},[a._v("#")]),a._v(" Installing Krayin on Shared Hosting")]),a._v(" "),e("p",[a._v("Follow these steps to install Krayin CRM on shared hosting:")]),a._v(" "),e("h4",{attrs:{id:"_1-download-krayin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-krayin"}},[a._v("#")]),a._v(" 1. Download Krayin")]),a._v(" "),e("p",[a._v("Go to the "),e("a",{attrs:{href:"https://krayincrm.com/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("official website"),e("OutboundLink")],1),a._v(" and download the latest version of Krayin CRM  in ZIP format..")]),a._v(" "),e("h4",{attrs:{id:"_2-extract-the-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-extract-the-contents"}},[a._v("#")]),a._v(" 2. Extract the Contents")]),a._v(" "),e("p",[a._v("Unzip the downloaded file and extract the contents to your local machine.")]),a._v(" "),e("h4",{attrs:{id:"_3-upload-files-to-your-hosting-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-upload-files-to-your-hosting-account"}},[a._v("#")]),a._v(" 3. Upload Files to Your Hosting Account")]),a._v(" "),e("p",[a._v("Use an FTP client (e.g., FileZilla) or your hosting control panel's File Manager to upload all the extracted files, including hidden files (like .env.example), to the root directory (e.g., public_html) or a subdirectory of your hosting account (e.g., public_html/krayin).")]),a._v(" "),e("h4",{attrs:{id:"_4-set-file-permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-file-permissions"}},[a._v("#")]),a._v(" 4. Set File Permissions")]),a._v(" "),e("p",[a._v("Make the following directories writable by setting appropriate permissions:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("- storage/\n- bootstrap/cache/\n")])])]),e("h4",{attrs:{id:"_5-set-up-a-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-set-up-a-database"}},[a._v("#")]),a._v(" 5. Set Up a Database")]),a._v(" "),e("p",[a._v("Log in to your hosting control panel, create a new database, and assign a user with full privileges to this database. Note the database name, username, and password for later steps.")]),a._v(" "),e("h4",{attrs:{id:"_6-install-dependencies-and-run-installer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-install-dependencies-and-run-installer"}},[a._v("#")]),a._v(" 6. Install Dependencies and Run Installer")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("With SSH Access:")])])]),a._v(" "),e("p",[a._v("If your hosting account provides terminal or SSH access, navigate to the project root directory and execute the following commands:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project\n\nphp artisan krayin-crm:install\n")])])]),e("p",[a._v("Provide the required details during the prompts, including application name, URL, locale, currency, database connection, and admin credentials.:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Please enter the application name "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease enter the application URL "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the default application locale "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the default currency "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database connection "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" the database name "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease enter your database username "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \nPlease enter your database password "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" \n")])])]),e("p",[a._v("Next, create the admin user credentials:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Enter the name of the admin user: \nEnter the email address of the admin user:\nConfigure the password "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" the admin user:\n")])])]),e("ul",[e("li",[e("p",[e("strong",[a._v("Without SSH Access:")])]),a._v(" "),e("ol",[e("li",[a._v("Run "),e("code",[a._v("composer install")]),a._v(" locally on your machine.")]),a._v(" "),e("li",[a._v("Upload the "),e("code",[a._v("vendor")]),a._v(" directory to your hosting account via FTP.")]),a._v(" "),e("li",[a._v("Update the "),e("code",[a._v(".env")]),a._v(" file with your database and application details.")])])])]),a._v(" "),e("h4",{attrs:{id:"_7-access-the-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-access-the-application"}},[a._v("#")]),a._v(" 7. Access the Application")]),a._v(" "),e("p",[a._v("Open your browser and visit the application URL (e.g., "),e("code",[a._v("http://yourdomain.com/")]),a._v(").")]),a._v(" "),e("p",[a._v("Now your application will be available in your browser.")]),a._v(" "),e("h3",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[a._v("#")]),a._v(" Contributing")]),a._v(" "),e("p",[a._v("Contributions are welcome! Follow the contribution guidelines to get started.")]),a._v(" "),e("h3",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),e("p",[a._v("Krayin is open-sourced software licensed under the MIT license.")])])}),[],!1,null,null,null);e.default=n.exports}}]);