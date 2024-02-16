import Link from 'next/link';
const DrinksList = ({ drinks }) => {
    // 传props 下面就得  const drinks = props.drinks;

    return (
        <ul className='menu menu-vertical pl-0'>
            {drinks.map((drink) => (
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className='text-xl font-medium'>
                        {drink.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default DrinksList;