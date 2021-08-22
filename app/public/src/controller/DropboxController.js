class DropboxController {

    constructor() {

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snackModal = document.querySelector('#react-snackbar-root');

       this.initEvent();  

    }

    initEvent() {

        this.btnSendFileEl.addEventListener('click', event =>{

            this.inputFilesEl.click();

        });

        this.inputFilesEl.addEventListener('change', event=> {

            console.log(event.target.files);
            this.snackModal.style.display="block";
            
        });

    }

}