import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const BtnAzulHeader = styled(Button)({
  background: 'var(--dark-blue)',
    '&:hover':{
        background: 'var(--dark-blue)',
    },
  border: 0,
  borderRadius: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '15px',
  fontFamily: 'var(--body-font)',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '18px',
  width: '200px'
});

export const BtnAmareloHeader = styled(Button)({
  background: 'var(--primary-yellow)',
    '&:hover': {
      background: 'var(--secondary-yellow)',
    },
  border: 0,
  borderRadius: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: '#110066',
  height: 48,
  padding: '0 30px',
  fontFamily: 'var(--body-font)',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '18px',
  width: '200px'
});

export const BtnContato = styled(Button)({
  background: 'var(--primary-yellow)',
    '&:hover':{
        background: 'var(--secondary-yellow)',
    },
  border: 0,
  borderRadius: 0,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'var(--dark-blue)',
  height: 48,
  padding: '0 30px',
  fontFamily: 'var(--body-font)',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '18px',
  width: '100%'
})