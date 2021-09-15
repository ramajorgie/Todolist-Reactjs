import React from 'react';
import Buttons from './Buttons';

class FormInput extends React.Component{
    state ={
      text : ''
    }

    ubahTulisan =(e) => {
      this.setState({text : e.target.value})
    }

    submit =(e) =>{
      e.preventDefault();
      if (this.state.text !== ''){
        this.props.add(this.state.text)
      }
      this.setState({text:''})
    }

    render(){
        return (
          <div>
            <form
              style={{
                background: "#00A19D",
                width: 550,
                height: 50,
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                padding: 10,
                marginTop: 10,
                borderRadius: 6,
              }}
            >
              <input
                style={{
                  width: "90%",
                  borderWidth: 0,
                  height: 20,
                  justifyContent: "space-between",
                }}
                value={this.state.text}
                onSubmit={this.submit}
                onChange={this.ubahTulisan}
              />
              <Buttons text="info" fungsi="info" action={this.submit}/>
              <Buttons/>
            </form>
          </div>
        );
    }
}




export default FormInput;

