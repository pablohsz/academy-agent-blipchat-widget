
(function () {
        window.onload = function () {
            new BlipChat()
                .withAppKey(appKey)
                .withButton({"color":"#0096fa","icon":""})
                .withCustomCommonUrl('https://protos-take-nick.chat.blip.ai/')
                .withTarget('main-container')
                .build();
        }
})();
            