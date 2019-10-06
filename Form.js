class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interest: [],
            details: []
        }
    }

    handleInput = (event) =>{
        let value = event.target.value
        let name = event.target.name
        let detailsTemp = this.state.details
        detailsTemp[name]= value
        this.setState({
            details: detailsTemp
        })
    }
    toggleInterests = (event) =>{
        let value = event.target.value
        let interestTemp = this.state.interest
        interestTemp[value] = event.target.checked
        this.setState({
            interest: interestTemp
        })
    }

    render() {
        let interest = this.state.interest
        console.log("from render: ", interest)
        console.log('from render details: ', this.state.details)
        return (
            <div>
                <h1>Home</h1>
                <ul className="form">
                    <li><label>Name:</label><input type="text" onChange={this.handleInput} name="name"/></li>
                    <li><label>Age:</label><input type="text" onChange={this.handleInput} name="age"/></li>
                    <li><label>DOB:</label><input type="date" onChange={this.handleInput} name="dob" /></li>
                    <li onChange={this.handleInput}><label>Gender:   </label><label>Male:<input type="radio" name="gender" value="male"/></label><label>Female:<input type="radio" name="gender" value="female" /></label></li>
                    <li><label>Education:</label>
                        <select onChange={this.handleInput} name="education">
                            <option value="highSchool">High School</option>
                            <option value="bachelor">Bachelor degree</option>
                            <option value="masters">Master degree</option>
                            <option value="phd">Doctorate</option>
                        </select>
                    </li>
                    <li>
                        <label>Interest(s):</label>
                        <input type="checkbox"  value="swimming" onChange={this.toggleInterests} /><label>Swimming</label>
                        <input type="checkbox"  value="basketball" onChange={this.toggleInterests} /><label>Basketball</label>
                        <input type="checkbox"  value="soccer" onChange={this.toggleInterests} /><label>Soccer</label>
                        <input type="checkbox"  value="pingpong" onChange={this.toggleInterests} /><label>Pingpong</label>
                        
                    </li>

                </ul>
            </div>

        )
    }
}

export default Form

