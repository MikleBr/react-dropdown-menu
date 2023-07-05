import ActionsMenu from './components/ActionsMenu';

import SettingsIcon from './assets/icons/SettingsIcon';
import MoreVerticalIcon from './assets/icons/MoreVerticalIcon.jsx';

function App() {
  return (
    <div className="max-w-[800px] h-[200vh] pt-40 mx-auto">
      <div>
        <ActionsMenu
          button={<MoreVerticalIcon />}
          className="absolute left-10 top-10 flex items-center justify-center w-8 h-8"
        >
          <ActionsMenu.Item className="text-left flex items-center justify-between">
            Подробнее <SettingsIcon />
          </ActionsMenu.Item>
          <ActionsMenu.Item className="text-left flex items-center justify-between">
            Поделиться в социальных сетях <SettingsIcon />
          </ActionsMenu.Item>
          <hr className="mx-auto w-[calc(100%-16px)] h-[1px]" />
          <ActionsMenu.Item className="text-left">
            Редактировать страницу
          </ActionsMenu.Item>
          <ActionsMenu.Item className="text-left text-red-400">
            Удалить страницу
          </ActionsMenu.Item>
        </ActionsMenu>
        <ActionsMenu
          button={<MoreVerticalIcon />}
          className="absolute left-10 bottom-10 flex items-center justify-center w-8 h-8"
        >
          <ActionsMenu.Item className="text-left">Подробнее</ActionsMenu.Item>
          <ActionsMenu.Item className="text-left">
            Поделиться в социальных сетях
          </ActionsMenu.Item>
          <hr className="mx-auto w-[calc(100%-16px)] h-[1px]" />
          <ActionsMenu.Item className="text-left">
            Редактировать страницу
          </ActionsMenu.Item>
          <ActionsMenu.Item className="text-left text-red-400">
            Удалить страницу
          </ActionsMenu.Item>
        </ActionsMenu>
        <ActionsMenu
          button={<MoreVerticalIcon />}
          className="absolute right-10 top-10 flex items-center justify-center w-8 h-8"
        >
          <ActionsMenu.Item className="text-left">Подробнее</ActionsMenu.Item>
          <ActionsMenu.Item className="text-left">
            Поделиться в социальных сетях
          </ActionsMenu.Item>
          <hr className="mx-auto w-[calc(100%-16px)] h-[1px]" />
          <ActionsMenu.Item className="text-left">
            Редактировать страницу
          </ActionsMenu.Item>
          <ActionsMenu.Item className="text-left text-red-400">
            Удалить страницу
          </ActionsMenu.Item>
        </ActionsMenu>
        <ActionsMenu
          button={<MoreVerticalIcon />}
          className="absolute right-10 bottom-10 flex items-center justify-center w-8 h-8"
        >
          <ActionsMenu.Item className="text-left">Подробнее</ActionsMenu.Item>
          <ActionsMenu.Item className="text-left">
            Поделиться в социальных сетях
          </ActionsMenu.Item>
          <hr className="mx-auto w-[calc(100%-16px)] h-[1px]" />
          <ActionsMenu.Item className="text-left">
            Редактировать страницу
          </ActionsMenu.Item>
          <ActionsMenu.Item className="text-left text-red-400">
            Удалить страницу
          </ActionsMenu.Item>
        </ActionsMenu>
      </div>
      <div className="mb-10">
        <h2 className="mb-4 text-3xl font-bold">Произвольный контент</h2>
        <ActionsMenu
          button={<div className="flex gap-2">Просто подсказка с текстом</div>}
          className="py-2 px-4 bg-indigo-500 text-white"
        >
          <p className="p-2 text-center">
            Подробное описание очень крутых фич, которые разрабатывает наша
            команда в угоду требований бизнеса
          </p>
        </ActionsMenu>
        <ActionsMenu
          button={<div className="flex gap-2">Контент с активностями</div>}
          className="mt-4 py-2 px-4 bg-indigo-500 text-white"
        >
          <div className="p-2">
            <p className="text-center">
              Подробное описание очень крутых фич, которые разрабатывает наша
              команда в угоду требований бизнеса
            </p>
            <div className="flex items-center justify-between">
              <ActionsMenu.Item className="w-fit mt-2 px-4 py-1  mx-auto flex justify-center rounded-md transition-all bg-red-400 hover:bg-red-300 text-white text-left">
                Удалить
              </ActionsMenu.Item>
            </div>
          </div>
        </ActionsMenu>
      </div>
    </div>
  );
}

export default App;
