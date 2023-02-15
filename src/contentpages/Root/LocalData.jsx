import React from "react"

export class LocalDataHolder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            levyRaatiDataLocal: [],
        }
        }
    updateLevyRaati(data) {
        this.setState(this.levyRaatiDataLocal=data);
    }
    getLevyRaatiData() {
        return this.state.levyRaatiDataLocal
    }

}