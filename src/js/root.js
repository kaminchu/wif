import React from "react";
import Wif from "wif";
import {Buffer} from "buffer";

export default class Root extends React.Component {

    constructor(props){
        super(props);
        this.state = {privateKey: "", wif: ""};
    }

    handleChangePrivateKey(e) {
        const privateKey = e.target.value.toString();
        const temp = new Buffer(privateKey, "hex");
        console.log(temp);
        if (temp.length !== 32) {
            this.setState({privateKey, wif: ""});
        } else {
            const wif = Wif.encode(128, temp, true);
            this.setState({privateKey, wif});
        }
    };

    render(){
        return(
            <div>
                <input type="text" value={this.state.privateKey} onChange={this.handleChangePrivateKey.bind(this)}/>
                <input type="text" value={this.state.wif} readOnly/>
            </div>
        );
    }
}