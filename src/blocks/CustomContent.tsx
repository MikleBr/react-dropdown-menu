import SettingsIcon from '../assets/icons/SettingsIcon';
import ActionsMenu from '../components/ActionsMenu';

export default function CustomContent() {
  return (
    <div className="mt-4">
      <h3 className="mb-4 text-3xl font-bold">Произвольный контент</h3>
      <p className="mt-1 mb-2 text-lg">
        Компонент дает возможность вставлять любой произвольный контент.
        Единственное ограничение - 260px ширины. Но этот момент тоже
        настраивается ;) Взаимодействие с этим контентом не приводит к закрытию
        меню.
      </p>
      <ActionsMenu
        button={<div className="flex gap-2">Просто подсказка с текстом</div>}
        className="py-2 px-4 bg-indigo-500 text-white"
      >
        <p className="p-2 text-center">
          Подробное описание очень крутых фич, которые разрабатывает наша
          команда в угоду требований бизнеса.
          <br />
          Мой{' '}
          <a
            className="text-blue-600"
            href="https://github.com/MikleBr"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </ActionsMenu>
      <h4 className="mt-2 text-xl font-medium">Встроенные кнопки</h4>
      <p className="mt-1 mb-2 text-lg">
        Нажатие на кнопку компонента <code>ActionsMenu.Item</code> вызовет
        обработчик <code>onClick</code> и закроет меню
      </p>
      <ActionsMenu
        button={<div className="flex gap-2">Действия с контентом</div>}
        className="py-2 px-4 bg-indigo-500 text-white"
      >
        <ActionsMenu.Item className="text-left   flex items-center justify-between">
          Настройки <SettingsIcon className="shrink-0" />
        </ActionsMenu.Item>
        <ActionsMenu.Item className="text-left flex items-center justify-between">
          Поделиться в социальных сетях <SettingsIcon className="shrink-0" />
        </ActionsMenu.Item>
        <hr className="mx-auto w-[calc(100%-16px)] h-[1px]" />
        <ActionsMenu.Item className="text-left">
          Редактировать страницу
        </ActionsMenu.Item>
        <ActionsMenu.Item className="text-left text-red-400">
          Удалить страницу
        </ActionsMenu.Item>
      </ActionsMenu>
      <h4 className="mt-2 text-xl font-medium">Смешанный компонент</h4>
      <p className="mt-1 mb-2 text-lg">
        Встроенные кнопки имею полную кастомизацию и дают возможность полной
        свободы действий
      </p>
      <ActionsMenu
        button={<div className="flex gap-2">Смешанный компонент</div>}
        className="py-2 px-4 bg-indigo-500 text-white"
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
  );
}
