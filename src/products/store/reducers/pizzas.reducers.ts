import * as fromPizzas from '../actions/pizza.actions';
import { Pizza } from './../../models/pizza.model';

export interface PizzaState {
    data: Pizza[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    data: [
        {
            "name": "Seaside Surfin'",
            "toppings": [
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 12,
                "name": "tomato"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 5,
                "name": "mozzarella"
              },
              {
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 3,
                "name": "basil"
              }
            ],
            "id": 2
          },
    ],
    loaded: false,
    loading: false,
};

export function reducer(
    state = initialState,
    action: fromPizzas.PizzasAction,
): PizzaState {

    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true,
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: false,
            }
        }
    }
    return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;

