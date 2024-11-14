let speech=new SpeechSynthesisUtterance();
        function startAudio(textareaId){
            let text=document.getElementById(textareaId).value;
            speech.text=text;
            window.speechSynthesis.speak(speech);
        }

        function stopAudio(){
            window.speechSynthesis.cancel();
        }