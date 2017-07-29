const React = require('react');
import {Button, Icon} from 'semantic-ui-react';

function getPubImg() {
    return `/assets/img/PubIcon${Math.floor(Math.random() * 3) + 1}.png`;
}

class PubSelectItemComponent extends React.Component {

    constructor(props) {
        super(props);

        this.onDelete = props.onDelete.bind(this);
        this.onUp = props.onUp.bind(this);
        this.onDown = props.onDown.bind(this);
    }

    render() {
        return(
            <div className="item pub">
                <img className="ui image" src={getPubImg()}/>
                    <div className="content">
                        <div className="header">{this.props.pub.TradingName}</div>
                        <div className="pub-select-buttons">
                            <Button.Group>
                                <Button onClick={() => this.onDelete(this.props.pub)}>
                                    <Icon name='remove' />
                                </Button>
                                <Button onClick={() => this.onUp(this.props.pub)}>
                                    <Icon name='chevron up' />
                                </Button>
                                <Button onClick={() => this.onDown(this.props.pub)}>
                                    <Icon name='chevron down'/>
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
            </div>
        );
    }
}

module.exports = PubSelectItemComponent;