using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameModeTimeTrial : MonoBehaviour
{
    public GameManager manager;
    public float levelTimer = 90f;
    public Text timeText;

    // Update is called once per frame
    void Update()
    {
        if (levelTimer > 0)
        {
            levelTimer = levelTimer - Time.deltaTime;
        }
        else
        {
            if (manager.isGameOver == false && manager.isLevelFinish == false)
            {
                manager.isGameOver = true;
                manager.player.Die();
                manager.lives = -5;
            }
        }

        timeText.text = levelTimer.ToString("F1");
    }
}
