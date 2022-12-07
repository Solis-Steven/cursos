using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameModeCoins : MonoBehaviour
{
    public GameManager manager;
    public GameObject[] monedas;
    public Text coinsText;

    // Update is called once per frame
    void Update()
    {
        monedas = GameObject.FindGameObjectsWithTag("moneda");

        if (monedas.Length == 0)
        {
            manager.FinishLevel();
        }

        coinsText.text = "x" + monedas.Length;
    }
}