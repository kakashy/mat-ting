import React, { Component } from 'react';
import './DataInput.css'

export default class extends Component {
  studentData;
  
    static defaultProps = {
    color: '#22D66A',
    theme: 'dark'
  };
  // storing data to Local Storage
  constructor() {
      super()

      let initialStudent = JSON.parse(localStorage.getItem("student"));
      this.state ={
          Name: ' ',
          Form: ' ',
          student: initialStudent
      }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /*
  How we handle data here will change from time to time.
  In this version, I'm going to pass it throught the console log first to see it's working & then
  baadae I'm going to parse it into local storage via JSON
  */
  handleChange(event) {
      const { value, name } = event.target
      localStorage[name] = value
      this.setState({
          [name]: value
      })
      event.preventDefault();
  }
  
  handleSubmit(event) {
      const {
          Name,
          Form,
      } =this.state;
      event.preventDefault();
      this.setState ({ Name, Form });
  }
  // React Life Cycle
  componentDidMount() {
    this.studentData = JSON.parse(localStorage.getItem('student'));

    if (localStorage.getItem('student')) {
        this.setState({
            Name: this.studentData.Name,
            Form: this.studentData.Form
        })
    } else {
        this.setState({
            Name: ' ',
            Form: ' '
        })
    }
}
componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('student', JSON.stringify(nextState));
}
  render() {
    return (
    <div className="Formu">
    <div className="personalInfo">
                <label className="label">
                    Name
                </label>
                <br />
                <input
                    name="Name"
                    placeholder="Name"
                    className="textInput"
                    onChange={this.handleChange}
                >

                </input>
                <br />
                
                <label className="label">
                    Form
                </label>
                <br />
                <input
                    name="Form"
                    placeholder="Form"
                    className="textInput"
                    onChange={this.handleChange}
                >

                </input>
                <br />

                <button
                    className="formButton"
                    type="submit"
                    onSubmit={this.handleSubmit}
                >
                    Save
                </button>
      
    </div>
    <div className="academia">
        <label className="label">
            Maths
        </label>
        <br />
        <input
            name="Maths"
            type="number"
            maxLength="3"
            placeholder="Maths"
            className="textInput"
            onChange={this.handleChange}
        >

        </input>
        <br />
    </div>

    </div>
    );
  }
}
