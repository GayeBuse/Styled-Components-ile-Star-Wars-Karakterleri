import styled from 'styled-components';
const KarakterCard = styled.div``;
const Paragraf = styled.p``;
const Label = styled.p``;
const Value = styled.p``;
export const Karakter = ({ karakter, filmler }) => {
  return (
    <div className="karakter-card">
      <KarakterCard>{karakter.card}</KarakterCard>
      <h3>{karakter.name}</h3>
      <Paragraf>
        <Label>Birth year:</Label>
        <Value>{karakter.birth_year}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Eye color:</Label>
        <Value>{karakter.eye_color}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Gender:</Label>
        <Value>{karakter.gender}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Height:</Label>
        <Value>{karakter.height}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Mass:</Label>
        <Value>{karakter.mass}</Value>
      </Paragraf>
      <Paragraf>
        <Label>Skin color:</Label>
        <Value>{karakter.skin_color}</Value>
      </Paragraf>

      <Paragraf>
        <Label></Label>
        <Value></Value>
      </Paragraf>

      <h4>Filmler:</h4>
      {karakter.films.map((f) => {
        const filmData = filmler.find((data) => data.title === f);
        if (filmData) {
          return <Film key={filmData.episode_id} film={filmData} />;
        }
      })}
    </div>
  );
};
