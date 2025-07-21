import React from "react";

class Pract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStr: "It is loading date...",
      timeStr: "It is loading time...",
    };
  }

  componentDidMount() {
    this.setIntervalNow(); // initial call
    this.timer = setInterval(this.setIntervalNow, 1000); // update every second
  }

  componentWillUnmount() {
    clearInterval(this.timer); // cleanup interval
  }

  setIntervalNow = () => {
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    const formattedTime = now.toLocaleTimeString();

    this.setState({
      dateStr: formattedDate,
      timeStr: formattedTime,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", fontSize: "22px" }}>
        <h2>Practical</h2>
        <p>
          <span style={{ color: "navy" }}>OM NAMAH SHIVAYA</span>
        </p>
        <p>{this.state.dateStr}</p>
        <p>{this.state.timeStr}</p>
      </div>
    );
  }
}

export default Pract;
