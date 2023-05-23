import styled from 'styled-components';
import { useState } from 'react';
import { postComment, postCommentReply } from '../MemoryDetailApi';
import { isCommentType } from '../../../type/CommentType';

const InputBox = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CommentInput = styled.input`
  all: unset;
  height: 20px;
  width: 100%;
  border-radius: 8px;
  padding: 18px 16px;
  font-family: ${({ theme }) => theme.font.family.pretendard_medium};
  background-color: ${({ theme }) => theme.color.grayScale.lightGray};
`;

type InputFormProps = {
  albumId: string | undefined;
  accessUserProfileImageUrl: string | null;
  commentId?: number;
};

const InputForm = ({ albumId, commentId, accessUserProfileImageUrl }: InputFormProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      alert('댓글을 입력해주세요.');
      return;
    }

    let res;
    if (!commentId) {
      res = await postComment(albumId, inputValue);
    } else {
      res = await postCommentReply(albumId, commentId, inputValue);
    }

    if (isCommentType(res)) {
      setInputValue('');
      alert('댓글이 입력되었습니다.');
    }
  };

  return (
    <InputBox onSubmit={handleSubmit}>
      <img
        src={accessUserProfileImageUrl ? accessUserProfileImageUrl : '/img/default.png'}
        alt="AlbumImg"
        className="profileImg"
      />
      <CommentInput
        placeholder="댓글을 입력해주세요."
        value={inputValue}
        onChange={handleInputChange}
      />
    </InputBox>
  );
};

export default InputForm;
