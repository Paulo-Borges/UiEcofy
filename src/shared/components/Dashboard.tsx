import { useCallback, useState } from "react";

interface IListItem {
  title: string;
  isSelected: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  const handleInputKeydown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim() === "") return;

        const value = e.currentTarget.value;

        setLista((oldLista) => {
          if (oldLista.some((ListItem) => ListItem.title === value))
            return oldLista;

          return [...oldLista, { title: value, isSelected: false }];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeydown} />

      <p>{lista.filter((item) => item.isSelected).length} itens selecionados</p>

      <ul>
        {lista.map((ListItem, index) => {
          return (
            <li key={ListItem.title}>
              <input
                type="checkbox"
                checked={ListItem.isSelected}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === ListItem.title
                          ? !oldListItem.isSelected
                          : oldListItem.isSelected;

                      return {
                        ...oldListItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />

              {ListItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
