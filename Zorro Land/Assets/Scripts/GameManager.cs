using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public MovimientoJugador player;
    public int totalCoins = 0;
    public int lives = 3;
    public Transform spawnPoint;
    public float timeToRespawn = 2f;
    private float timer = 0;
    public bool isGameOver = false;
    public bool isLevelFinish = false;
    public Text lifesText;

    public GameObject levelEndPanel;
    public Text levelEndText;

    // Start is called before the first frame update
    void Start()
    {
        player.transform.position = spawnPoint.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        if (player.isAlive == false)
        {
            if (timer < timeToRespawn)
            {
                timer = timer + Time.deltaTime;
            }
            else
            {
                if (lives >= 1)
                {
                    lives = lives - 1;
                    player.transform.position = spawnPoint.transform.position;
                    player.isAlive = true;
                    timer = 0;
                }
                else
                {
                    isGameOver = true;
                }
            }

        }
        if (isGameOver == true || isLevelFinish == true)
        {
            levelEndPanel.SetActive(true);

            if (isGameOver)
            {
                levelEndText.text = "GAMEOVER";
            }

            if (isLevelFinish)
            {
                levelEndText.text = "FINISHED";
            }

            if (Input.GetKeyDown(KeyCode.Escape))
            {
                // Ir al menú principal
                SceneManager.LoadScene(0);
            }
        }

        lifesText.text = "x" + lives;

    }

    public void FinishLevel()
    {
        isLevelFinish = true;
    }
}