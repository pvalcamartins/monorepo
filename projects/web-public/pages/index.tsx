import { Text } from '@alura/design-system';
import { sum } from '@alura/utils/math/sum';

export default function HomeScreen() {
    return (
        <div>
            <Text tag="h1">Home do Projeto Site</Text>
            <Text tag="p">@alura/utils/math/sum: sum(2,2) = {sum(2,2)}</Text>
        </div>
    );
}
