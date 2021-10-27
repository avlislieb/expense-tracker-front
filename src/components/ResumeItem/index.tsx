import * as C from './styles';


type Props = {
    value: number;
    title: string;
    color?: string;
}

export const ResumeItem = ({ value, title, color }: Props) => {

    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    );
}