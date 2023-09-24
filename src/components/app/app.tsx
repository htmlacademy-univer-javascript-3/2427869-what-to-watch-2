import Main from '../../pages/main/main';

interface IAppProps {
  filmName: string;
  genre: string;
  promoDate: number;
}

function App(props: IAppProps) {
  return (
    <Main
      filmName={props.filmName}
      genre={props.genre}
      promoDate={props.promoDate}
    />);
}

export default App;
