import {FC} from 'react';

type ChatProps = {
    userName: string
};

export const Chat: FC<ChatProps> = ({userName}) => {
    return (
        <div>
            chat {userName}
        </div>
    );
};