import React from 'react';
import Helmet from 'react-helmet';
// import moon from '../assets/moon.png';
// import sun from '../assets/sun.png';

export default class Toggle extends React.Component {

  render() {
    const {theme, themer, move} = this.props;
    return(
      <div>
        <Helmet  meta={[{ name: 'theme-color', content: (theme === 'dark' ? '#1f1f1f': '#296be4')}]}/>
        <div className="mw960">
          <div className="width100 mh30">
            <div className={'toggleBtnWrap inbl fr marginR10 posRel toggleFader '+ (move ? 'moveUp75': '') } style={{ animationDelay: move ? '1s' : '0'}}>
              {/* <input checked={}/> */}
              <div className="inbl white toggleBtnBg toggleBtn" onClick={themer}>
                {/* <img src={this.getImage()} type="image/png" style={{ 'paddingLeft': '26px', height: '20px', paddingTop: '2px'}}/> */}
              </div>
              <div ref="toggler" className={'toggler togglerBg ' + (theme === 'dark' ? '' : 'moveRight')}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}