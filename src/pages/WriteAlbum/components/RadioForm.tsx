import * as S from './style/WriteFormStyle';

type RadioFormProps = {
  visible: boolean;
  handleIsOpen: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioForm = ({ visible, handleIsOpen }: RadioFormProps) => {
  return (
    <div className="flexBoxStart">
      <div className="write_title littleMargin">공개여부</div>
      <div className="checkbox">
        <S.CheckBox
          type="radio"
          name="check2"
          id="open"
          value="open"
          onChange={handleIsOpen}
          checked={visible}
        />
        <label htmlFor="open" className="write_content">
          공개
        </label>
      </div>
      <div className="checkbox">
        <S.CheckBox
          type="radio"
          name="check2"
          id="notOpen"
          value="notOpen"
          onChange={handleIsOpen}
          checked={!visible}
        />
        <label htmlFor="notOpen" className="write_content">
          비공개
        </label>
      </div>
    </div>
  );
};

export default RadioForm;
