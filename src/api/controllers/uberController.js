const Uber = require('node-uber');

module.exports = {
    uberAuth: (req, res, next) => {
        const uber = new Uber({
            client_id: 'WpGOnRIpbOQwc1CG5dtfain9hjXsS8Dp',
            client_secret: '0vQZLvcWYoxd7jgu7DMHTtOwmit8U6dNv9yrAXLU',
            server_token: 'U50cRdRq7eUzaDV1IEvPXk5m8_kOD51RRGgGcT9r',
            redirect_uri: ' https://movewin.herokuapp.com/api/auth',
            name: 'MoveWin',
            language: 'pt_BR',
            sandbox: true
        });

        // const url = uber.getAuthorizeUrl(['history_lite']);
        res.send("https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=WpGOnRIpbOQwc1CG5dtfain9hjXsS8Dp&scope=history_lite&redirect_uri=https://movewin.herokuapp.com/api/auth");
    }
}