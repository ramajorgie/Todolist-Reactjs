import React from 'react';

class FormInput extends React.Component{
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
              />
              <button>Add</button>
            </form>
          </div>
        );
    }
}

export default FormInput;

