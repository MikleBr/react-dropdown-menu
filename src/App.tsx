import CustomContent from './blocks/CustomContent.js';
import DefaultPositions from './blocks/DefaultPositions.js';
import Main from './blocks/Main.js';

function App() {
  return (
    <div className="max-w-[800px] py-20 mx-auto">
      <h1 className="mb-10 text-4xl font-black">Крутое тестовое задание</h1>
      <Main />
      <h2 className="mt-8 mb-4 text-3xl font-bold">
        Компонент <code>{`<ActionMenu />`}</code>
      </h2>
      <p className="mt-1 mb-2 text-lg">
        Компонент <code>{`<ActionMenu />`}</code> является надстройкой над{' '}
        <code>{`<DropdownMenu />`}</code>. В нем встроены: управление состоянием
        по нажатию на тригер, кнопка - тригер (в нее можно передать любой
        контент через проп <code>button</code>) и внутренние кнопки{' '}
        <code>{`<ActionMenu.Item />`}</code> подробнее о которых будет дальше.
        <br />
        Посмотрим варианты использования:
      </p>
      <CustomContent />
      <DefaultPositions />
    </div>
  );
}

export default App;
