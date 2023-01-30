import PropTypes from 'prop-types';
import React,{Component} from 'react';
import ChatBot from 'react-simple-chatbot';


class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit: '',
        timp: '',
        suma: '',
        cheltuieli:'',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { venit, timp, suma, cheltuieli } = steps;
  
      this.setState({ venit, timp, suma, cheltuieli });
    }
  
    render() {
      const { venit, timp, suma, cheltuieli } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Venit:</td>
                <td>{venit.value}</td>
              </tr>
              <tr>
                <td>Numarul de luni in care ai vrea sa achizitionezi</td>
                <td>{timp.value}</td>
              </tr>
              <tr>
                <td>Suma pe care esti dispus sa o platesti</td>
                <td>{suma.value}</td>
              </tr>
              <tr>
                <td>Total cheltuieli</td>
                <td>{cheltuieli.value}</td>
              </tr>
              <tr>
                <td>Suma </td>
                <td>{
                suma.value/timp.value>venit.value-cheltuieli.value ? 'Schimba-ti jobul' : suma.value/timp.value
                
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  

  class SimpleForm extends Component {
    render() {
      return (
        <ChatBot steps={[
            {
              id: '1',
              message: 'Cum te numesti?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Buna {previousValue}!',
              trigger: '4',
            },
            {
              id: '4',
              message: 'Ma numesc Adema si sunt consultantul tau financiar',
              trigger: '5',
            },
            {
              id: '5',
              message: 'Cu ce te pot ajuta?',
              trigger:'6',
            },
            {
              id: '6',
              options: [
                { value: 1, label: 'Obtinerea unei locuinte?', trigger: '7' },
                { value: 2, label: 'Stingerea anticipata a creditului', trigger: '7' },
                { value: 3, label: 'Obtinerea sigurantei financiare', trigger: '7' },
                { value: 4, label: 'Retragearea anticipata din activitate', trigger: '7' },
              ],
            },
            
          {
           id:'7',
           message:'Venitul tau lunar:',
           trigger:'venit',
          },
          {
            id: 'venit',
            user: true,
            trigger: '8',
          },
          {
            id:'8',
            message:'Numarul de luni in care ai vrea sa achizitionezi',
            trigger:'timp',
          },
          {
            id: 'timp',
            user: true,
            trigger: '9',
          },
          {
            id:'9',
            message:'Suma pe care esti dispus sa o platesti',
            trigger:'suma',
          },
          {
            id: 'suma',
            user: true,
            trigger: '10',
          },
          {
            id:'10',
            message:'Cheltuieli lunare',
            trigger:'cheltuieli',
          },
          {
            id: 'cheltuieli',
            user: true,
            trigger: 'review',
          },
           {
            id:'review',
            component: <Review/>,
            asMessage: true,
           trigger:'final',
           },
           {
            id:'final',
            message: 'Atat pe azi',
           end: true,
           },
          ]} 
          />
      );
    }
  }
  export default SimpleForm;