/*
* 1. Виды вызовов компонентов
*
* Классовый React.Component и React.PureComponent
* при изменение пропсов или состояния происходит ререндер, при этом вызывается
* шудкомпонентапдейт, который проверяет пропсы и состояния , и решает обновлять или нет компонент
* при этом есть особенность для дочерних компонентов, они обновляются всегда
* если он не PureComponent или не React.memo
*
* функциональный func = () => <></>
* React.memo(func = () => <></>)
*  */

/*
* 2. Состояния в классах
*
* Напрямую состояние менять нельзя, нужно использовать setState(newState, callback)
* запись через функцию даёт 100% результат, что используется текущий state, также
* можно вторым аргументом использовать обратный вызов, после изменения состояния.
* при вызове нескольких setState, react помещает их в очередь и группирует (батчинг)
*
* Использовать дженерик Readonly
*
*  */

/*
* 3. Состояния в функциях ( useState || хук )
*
* Можно использовать только в функциях.
* const [state, setState] = React.useState(initialState)
*
*  */

/*
* 6 урок
*
* Один компонент одна ответственность
*
* Мобильную версию лучше делать в классах, иначе дублируется кодовая база и логика
*
*

* 7 урок Жизненный цикл компонента
*
*  ТИПЫ
*
* - Монтирование ( Путь компонента от создания до встраивания в дом дерево )
* - Обновление ( Путь от момента создания до этапа когда компонент точно обновился )
* - Размонтирование ( Удаление компонента из дом дерева )
* - Обработка ошибок ( Обработка ошибок при возникновение в компоненте )
*
* ЭТАПЫ
*
* - Render ( Не имеет побочных эффектов. Может быть приостановлен, прерван или перезапущен )
* - Pre-commit ( Можно производить чтение дом )
* - Commit ( Может работать с дом, выполнять побочные эффекты, назначать обновления )
*
* Mount and unmount
*   render
*       constructor -> getDerivedStateFromProps -> render
*   commit
*       React обновляет дом и рефы -> componentDidMount -> componentWillUnmount
*
*
* constructor
*   - можно инициализировать состояние
*   - Никогда не копировать пропсы в состояние!!!
*   - Можно биндить контекст ( но уже так не делают )
*   - не стоит делать сайдэфекты и делать подписки
*
* getDerivedStateFromProps
*   - принимает состояние и пропы
*   - вызывается перед рендером и каждый раз при обновление
*   - возвращает новое состояние на основе пропсов
*   - применяется редко ( скролл в чате прибивать к низу к примеру )
*
* render
*   - единственный обязательный метод
*   - возвращает не только jsx но и строки були порталы и тд
*
* componentDidMount
*   - метод для сайд эфектов, таймеров, подписок, setState
*
* componentWillUnmount
*   - метод для отписки подписок, setState
*
* Методы обновления
*  render
*       getDerivedStateFromProps -> shouldComponentUpdate -> render
*   pre-commit
*       getSnapshotBeforeUpdate -> React обновляет дом и рефы
*   commit
*       componentDidUpdate
*
* shouldComponentUpdate ( nextProps, nextState, nextContext )
*   - возвращает буль
*   - обновлять или нет компонент
*   - НЕ ИСПОЛЬЗОВАТЬ ПРИ PureComponent
*   - не сравнивать глубоко и не использовать json.stringify ( тяжёлая функция )
*
* getSnapshotBeforeUpdate(prevProps, prevState)
*   - возвращает что угодно
*   - попадает в componentDidUpdate
*
* componentDidUpdate(prevProps, prevState, snapshot)
*   -можно работать с дом
*   - setState в условие
*
* getDerivedStateFromError (error)
*   - возвращает объект состояния
*   - для отображения ошибки
*   - вызывается когда в компоненте происходит ошибка он статичный
*
* componentDidCatch(error, errorInfo)
*   - в нем используется сайдЭффекты
*
*  */
