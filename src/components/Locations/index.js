import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import ConnectElements from 'react-connect-elements';
import Title from '../ui/Title';
import Icon from '../ui/Icon';
import { addCoordinates } from '../../utils/func';

import './location.scss';
import moment from '../Calendar';

const LocationBox = styled.div`
    position: relative;
    overflow: hidden;
`;

const Location = styled.div`
    position: absolute;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
`;

const FotoBox = styled.div`
    position: absolute;
    width:100px;
    height:100px;
    background-color:red;
    bottom: ${props => (props.positionBottom ? `${props.positionBottom}px` : 0)};
    left: ${props => (props.positionLeft ? `${props.positionLeft}%` : 0)};
`;

const LocationName = styled.div`
  background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
  box-shadow: 0px 0px 4px 4px ${data => (data.theme ? '#333' : '#fff')};
  color: ${props => (props.theme ? props.theme.gameCards : '#fff')};
  border: 2px solid
  font-size: 1em;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 10px;
  position: relative;
`;

const coordinate = [
  {
    'item.x': 12,
    'item.x2': 12,
    'item.y': 80,
    'item.y2': 340,
  },
  {
    'item.x': 24,
    'item.x2': 24,
    'item.y': 100,
    'item.y2': 240,
  },
  {
    'item.x': 36,
    'item.x2': 36,
    'item.y': 240,
    'item.y2': 80,
  },
  {
    'item.x': 48,
    'item.x2': 45,
    'item.y': 200,
    'item.y2': 340,
  },
  {
    'item.x': 60,
    'item.x2': 60,
    'item.y': 400,
    'item.y2': 200,
  },
  {
    'item.x': 72,
    'item.x2': 75,
    'item.y': 300,
    'item.y2': 80,
  },
  {
    'item.x': 84,
    'item.x2': 84,
    'item.y': 240,
    'item.y2': 350,
  },
];


class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.debounce(this.onVisible, 200, false), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounce(this.onVisible, 200, false), false);
  }

   debounce = (func, wait, immediate) => {
     let timeout;
     return () => {
       const context = this;
       const args = this;
       const later = () => {
         timeout = null;
         if (!immediate) func.apply(context, args);
       };
       const callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
     };
   };

  onVisible = () => {
    this.setState({
      visible: false,
    }, () => {
      this.setState({
        visible: true,
      });
    });
  };

connect = () => {
  // window.addEventListener('resize', () => {
  //   this.setState({
  //     visible: false,
  //   }, ()=>{this.setState({ visible: true})});
  // });
  return (
      this.state.visible
    ? (
      <ConnectElements
        selector=".els"
        overlay={10}
        strokeWidth={2}
        color="#FFDC26"
        elements={[
          { from: '.element0', to: '.element100' },
          { from: '.element1', to: '.element101' },
          { from: '.element2', to: '.element102' },
          { from: '.element3', to: '.element103' },
          { from: '.element4', to: '.element104' },
          { from: '.element5', to: '.element105' },
          { from: '.element6', to: '.element106' },
        ]}
      />
    )
    : ''
  );
};

render() {
  const { locations } = this.props;
  return (
    (
      <LocationBox>
        {
                  locations ? (
                    <div className="els">
                      <Title primary level={2}>
                        {locations.title}
                      </Title>

                      {
                          locations.list.map((item, index) => (
                            <>
                              <Location
                                positionLeft={coordinate[index]['item.x']}
                                positionBottom={coordinate[index]['item.y']}
                                className={`${'element element'}${index}`}
                              >
                                <LocationName>
                                  {`T ${index + 1}`}
                                </LocationName>
                              </Location>
                              <FotoBox
                                positionLeft={coordinate[index]['item.x2']}
                                positionBottom={coordinate[index]['item.y2']}
                                className={`${'element element'}${100 + index}`}
                              />
                            </>
                          ))
                        }

                      {this.connect()}
                    </div>
                  ) : null
                }
        <Icon name="bg-layer6" className="factory-building" />
      </LocationBox>
    ));
}
}


// const REF = () => {
//   let conect = null;
//   setTimeout(() => {
//     conect = (
//       <ConnectElements
//         selector=".els"
//         overlay={10}
//         strokeWidth={2}
//         color="#FFDC26"
//         elements={[
//           { from: '.element0', to: '.element100' },
//           { from: '.element1', to: '.element101' },
//           { from: '.element2', to: '.element102' },
//           { from: '.element3', to: '.element103' },
//           { from: '.element4', to: '.element104' },
//           { from: '.element5', to: '.element105' },
//           { from: '.element6', to: '.element106' },
//         ]}
//       />
//     );
//   }, 2000);
//   return (conect);
// };

// const Locations = ({ locations }) => (
//   <LocationBox>
//     {
//         locations ? (
//           <div className="els">
//             <Title primary level={2}>
//               {locations.title}
//             </Title>
//
//             {
//                 locations.list.map((item, index) => (
//                   <>
//                     <Location positionLeft={coordinate[index]['item.x']} positionBottom={coordinate[index]['item.y']} className={`${'element element'}${index}`}>
//                       <LocationName>
//                         {`T ${index + 1}`}
//                       </LocationName>
//                     </Location>
//                     <FotoBox positionLeft={coordinate[index]['item.x2']} positionBottom={coordinate[index]['item.y2']} className={`${'element element'}${100 + index}`} />
//                   </>
//                 ))
//             }
//             <ConnectElements
//                 selector=".els"
//                 overlay={10}
//                 strokeWidth={2}
//                 color="#FFDC26"
//                 elements={[
//                   { from: '.element0', to: '.element100' },
//                   { from: '.element1', to: '.element101' },
//                   { from: '.element2', to: '.element102' },
//                   { from: '.element3', to: '.element103' },
//                   { from: '.element4', to: '.element104' },
//                   { from: '.element5', to: '.element105' },
//                   { from: '.element6', to: '.element106' },
//                 ]}
//             />
//           </div>
//         ) : null
//       }
//     <Icon name="bg-layer6" className="factory-building" />
//   </LocationBox>
// );
//
// Locations.propTypes = {
//   locations: PropTypes.exact({
//     title: PropTypes.string,
//     list: PropTypes.array,
//   }).isRequired,
// };

export default withTheme(Locations);
