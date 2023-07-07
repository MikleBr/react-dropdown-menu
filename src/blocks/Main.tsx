import { useState, useRef } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import ActionsMenu from '../components/ActionsMenu';

function HoverDropdownMenu() {
  const [open, setOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onMouseOver = () => {
    setOpen(true);
  };

  const onMouseOut = () => {
    setOpen(false);
  };

  return (
    <>
      <img
        ref={imageRef}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className="w-[260px]"
        src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      />

      <DropdownMenu
        triggerRef={imageRef}
        className="w-[260px] rounded-md p-2"
        offset={10}
        open={open}
        defaultPosition={{ horizontal: 'right', vertical: 'bottom' }}
      >
        Ну какой красавец!
      </DropdownMenu>
    </>
  );
}

export default function Main() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">
        Компонент <code>{`<DropdownMenu />`}</code>
      </h2>
      <p className="mt-1 mb-2 text-lg">
        Реализован компонент <code>{`<DropdownMenu />`}</code>. Он дает только
        плашку, которую мы привязываем к любому ref, относительно которого будет
        происходить позиционирование.
        <br />
        <br />
        Управление полностью передается за счет пропсов <code>open</code> и{' '}
        <code>onClose</code>. Контент должен задаваться снаружи с помощью{' '}
        <code>children</code>.
        <br />
        Компонент настраивается любым способом. Например, можно сделать открытие
        по клику:
      </p>
      <ActionsMenu
        button={<div className="flex gap-2">Кликни!</div>}
        className="py-2 px-4 bg-gray-500 text-white"
      >
        <div className="p-2">Привет, мир!</div>
      </ActionsMenu>
      <p className="mt-1 mb-2 text-lg">
        Попробуем сделать открытие при наведении на триггер. В данном случае
        триггер - картинка с котиком
      </p>
      <HoverDropdownMenu />
      <h4 className="mt-2 text-xl font-medium">Совместное открытие меню</h4>
      <p className="mt-1 mb-2 text-lg">
        Открытие какого-либо меню вызовет обработчик <code>onClose</code> в
        других меню. Поэтому можно гибко настроить правила открытия/закрытия
        плашки. Попробуйте открыть меню из первого примера, а потом навести
        курсор на картинку - первое меню закроется.
      </p>
      <h4 className="mt-2 text-xl font-medium">Выход триггера вьюпорта</h4>
      <p className="mt-1 mb-2 text-lg">
        Так же важно заметить, что компонент скрывается при выходе триггера из
        вьюпорта независимо от внешнего состояния. Но при возвращении триггера -
        снова открывает (если меню не было закрыто каким-либо другим способом).
        Попробуйте открыть меню из первого примера кликом и пролистать страницу
        до его исчезновения. Потом, вернувшись в положение, где триггер виден,
        меню само откроется.
        <br />
        <br />
        Это так же настраивается с помощью пропса{' '}
        <code>closeOnExitViewport</code>. Если он <code>true</code>, то
        компонент не будет открываться при возвращении во вьюпорт. В примере
        ниже при возврате к кнопке меню уже не откроется.
      </p>
      <ActionsMenu
        button={<div className="flex gap-2">Я закроюсь навсегда:(</div>}
        className="py-2 px-4 bg-gray-500 text-white"
        closeOnExitViewport
      >
        <div className="p-2">Пока что меня видно</div>
      </ActionsMenu>
    </div>
  );
}
