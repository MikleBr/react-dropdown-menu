import ActionsMenu from '../components/ActionsMenu';

export default function DefaultPositions() {
  return (
    <div className="mt-4">
      <h3 className="mt-10 mb-4 text-3xl font-bold">
        Позиционирование по-умолчанию
      </h3>
      <p className="mt-1 mb-2 text-lg">
        Компонент имеет возможность устанавливать позицию по-умолчанию. Эта
        позиция применяется, когда нет ограничений на расположение меню
      </p>
      <div className="mb-10 flex items-center justify-between">
        <ActionsMenu
          button={<div className="flex gap-2">Left - Top</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'left', vertical: 'top' }}
        >
          <div className="p-2">Left - Top</div>
        </ActionsMenu>
        <ActionsMenu
          button={<div className="flex gap-2">Right - Top</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'right', vertical: 'top' }}
        >
          <div className="p-2">Right - Top</div>
        </ActionsMenu>
      </div>
      <div className="flex items-center justify-between">
        <ActionsMenu
          button={<div className="flex gap-2">Left - Bottom</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <div className="p-2">Left - Bottom</div>
        </ActionsMenu>
        <ActionsMenu
          button={<div className="flex gap-2">Right - Bottom</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div className="p-2">Right - Bottom</div>
        </ActionsMenu>
      </div>
      <p className="mt-1 mb-2 text-lg">
        Теперь может быть ситуация, когда размеры экрана заставляют наше меню
        двигаться. Попробуйте открыть меню и уменьшить размер экрана. Позиция
        меню сама изменится на наиболее подходящую для просмотра пользователем.
      </p>
      <div className="flex items-center justify-between">
        <ActionsMenu
          button={<div className="flex gap-2">Right - Bottom</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div className="p-2">Right - Bottom</div>
        </ActionsMenu>
        <ActionsMenu
          button={<div className="flex gap-2">Left - Bottom</div>}
          className="p-2 bg-gray-500 text-white"
          defaultPosition={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <div className="p-2">Left - Bottom</div>
        </ActionsMenu>
      </div>
    </div>
  );
}
