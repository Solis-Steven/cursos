using System.Collections;
using UnityEngine;
using System.Collections.Generic;

public class MovimientoJugador : MonoBehaviour
{
    float fuerzaSalto = 3.5f;
    int limit = 2;
    int saltosTotales;
    Rigidbody2D rb;
    public bool isAlive = true;

    public AudioSource audioS;
    public AudioClip coinSound;
    public AudioClip hurtSound;
    public AudioClip jumpSound;
    public AudioClip Hit_Hurt3;

    public GameManager manager;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        saltosTotales = 0;
    }

    // Update is called once per frame
    void Update()
    {
        // Movimiento a derecha
        if (Input.GetKey(KeyCode.D) && isAlive == true)
        {
            if (GetComponent<SpriteRenderer>().flipX == true)
            {
                GetComponent<SpriteRenderer>().flipX = false;
            }
            GetComponent<Animator>().SetBool("correr", true);
            transform.Translate(1.5f * Time.deltaTime, 0, 0);

        }

        // Movimiento a izquierda
        if (Input.GetKey(KeyCode.A) && isAlive == true)
        {
            if (GetComponent<SpriteRenderer>().flipX == false)
            {
                GetComponent<SpriteRenderer>().flipX = true;
            }
            GetComponent<Animator>().SetBool("correr", true);
            transform.Translate(-1.5f * Time.deltaTime, 0, 0);
        }

        // Parar animaciones
        if (Input.GetKeyUp(KeyCode.A) || Input.GetKeyUp(KeyCode.D))
        {
            GetComponent<Animator>().SetBool("correr", false);
        }
        // Saltar
        if (Input.GetKeyDown(KeyCode.Space) && isAlive == true)
        {
            if (saltosTotales < limit)
            {
                rb.AddForce(new Vector2(0f, fuerzaSalto), ForceMode2D.Impulse);
                saltosTotales++;
                audioS.PlayOneShot(jumpSound, 0.5f);
            }

            GetComponent<Animator>().SetBool("Jump", true);
            GetComponent<Animator>().SetBool("correr", false);
        }

        if (isAlive == true)
        {
            GetComponent<Animator>().SetBool("Die", false);
        }

    }
    

    // Saltos
    void OnCollisionEnter2D(Collision2D obj)
    {
        if (obj.collider.tag == "suelo")
        {
            saltosTotales = 0;
            GetComponent<Animator>().SetBool("Jump", false);
        }

        if (obj.gameObject.tag == "enemy" || obj.gameObject.tag == "spikes")
        {
            isAlive = false;
            GetComponent<Animator>().SetBool("Die", true);
            audioS.PlayOneShot(hurtSound, 0.5f);
        }

        if (obj.gameObject.tag == "weakpoint")
        {
            obj.transform.parent.GetComponent<BoxCollider2D>().enabled = false;
            audioS.PlayOneShot(Hit_Hurt3, 0.5f);
            Destroy(obj.transform.parent.gameObject);
        }

    }

    // Monedas
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "moneda")
        {
            Destroy(collision.gameObject);
            manager.totalCoins++;
            audioS.PlayOneShot(coinSound, 0.5f);
        }

        if (collision.gameObject.tag == "checkpoint")
        {
            manager.spawnPoint = collision.gameObject.transform;
        }

        if (collision.gameObject.tag == "levelend")
        {
            manager.FinishLevel();
        }

        if (collision.gameObject.tag == "monedafalsa")
        {
            Destroy(collision.gameObject);
            isAlive = false;
            GetComponent<Animator>().SetBool("Die", true);
            audioS.PlayOneShot(hurtSound, 0.5f);
        }
    
    }

    public void Die()
    {
        isAlive = false;
        GetComponent<Animator>().SetBool("Die", true);
        audioS.PlayOneShot(hurtSound, 0.5f);
    }


}
