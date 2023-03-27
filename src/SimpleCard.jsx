import React, { Component } from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';
import './SimpleCard.css';

class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl, veri, hrs } = this.props;
    return (
      <div className="Container">
        <div className="Card">
          <Image src={imageUrl} />
          <div className="content">
            <div className="sub-content">
              <Title
                text={title}
                veri={
                  <img src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/11/11/twitter-verification-extension.png?quality=80&resize=1280,720" />
                }
                hrs={"5hrs"}
              />
              <Description text={description} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCard;


