import React from "react";

interface propsDataIf {
  type: string;
  label: string;
  style: any;
  id: string;
  setValue?: (request: any) => void;
}

export class FluidInput extends React.Component<propsDataIf> {
  constructor(props: propsDataIf) {
    super(props);
    this.state = {
      focused: false,
      value: "",
    };
    // this.setState(this.state);
  }
  focusField() {
    const { focused }: any = this.state;
    this.setState({
      focused: !focused,
    });
  }
  handleChange(event: any) {
    const { target } = event;
    const { value } = target;
    this.setState({
      value: value,
    });
    if (this.props?.setValue) this.props?.setValue(value);
  }
  render() {
    const { type, label, style, id } = this.props;
    const { focused, value }: any = this.state;

    let inputClass = "fluid-input";
    if (focused) {
      inputClass += " fluid-input--focus";
    } else if (value != "") {
      inputClass += " fluid-input--open";
    }

    return (
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          <input
            className="fluid-input-input"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.focusField.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoComplete="off"
          />
          {/* forHtml={id} */}
          <label className="fluid-input-label">{label}</label>
        </div>
      </div>
    );
  }
}

interface ButtonIf {
  buttonText: string;
  buttonClass: string;
  onClick?: () => void;
}

export class Button extends React.Component<ButtonIf> {
  render() {
    return (
      <div
        className={`button ${this.props.buttonClass}`}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </div>
    );
  }
}
