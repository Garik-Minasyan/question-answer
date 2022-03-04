import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "../../Components/Select/Index";
import { getCategores, setCategori } from "../../Store/Actions";
import { getAppStore } from "../../Store/Selectors";
import { urls } from "../../Utils";
import { S } from "./styles";

const Home = () => {
  const [value, setValue] = useState(null);
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector(getAppStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategores);
    }
  }, []);

  const handleSelectCategori = ({ target: { value } }) => {
    value ? setActive(false) : setActive(true);
    setValue(value);
  };

  const handleSubmit = () => {
    navigate(urls.game);
    dispatch(setCategori(value));
  };

  return (
    <S.HomeWrapper>
      <S.HomeTitle>Trivia App</S.HomeTitle>
      <S.Label>Pick a Category</S.Label>
      <Select
        value={value || false}
        onChange={handleSelectCategori}
        renderOption={{ label: 'name', key: 'id', value: 'name', }}
        options={categories}
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Category</em>;
          }
          return selected.name;
        }}
      />
      <S.ButtonWrapper>
        <S.StartBtn isActive={active} disabled={active} onClick={handleSubmit}>Start</S.StartBtn>
      </S.ButtonWrapper>
    </S.HomeWrapper>
  );
};
export default Home;