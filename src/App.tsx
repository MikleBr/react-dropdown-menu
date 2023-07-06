import CustomContent from './blocks/CustomContent.js';
import DefaultPositions from './blocks/DefaultPositions.js';
import Main from './blocks/Main.js';

function App() {
  return (
    <div className="max-w-[800px] h-[200vh] pt-40 mx-auto">
      <Main />
      <h2 className="mb-4 text-3xl font-bold">
        Компонент <code>{`<ActionMenu />`}</code>
      </h2>
      <p className="mt-1 mb-2 text-lg">
        Компонент <code>{`<ActionMenu />`}</code> является надстройкой над{' '}
        <code>{`<DropdownMenu />`}</code>. В нем уже зашито встроенное
        управление состоянием, кнопка, вызывающая открытие и внутренние кнопки{' '}
        <code>{`<ActionMenu.Item />`}</code> подробнее о котором будет дальше
      </p>
      <CustomContent />
      <DefaultPositions />
    </div>
  );
}

export default App;
